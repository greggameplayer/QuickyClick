<template>
  <div id="usercontainer">
    <span :class="{ hide: !player }" id="welcomeMsg">{{ welcomeMessage }}</span>
    <div id="userformcontainer">
      <form id="userform">
        <div id="fieldscontainer" :class="{hide: logged || !renderAuth}" class="form-group">
          <input class="form-control mb-2" type="email" name="email" id="txtEmail" v-model="authInput.txtEmail" placeholder="Email" required>
          <input class="form-control" type="Password" name="password" id="txtPassword" v-model="authInput.txtPassword" placeholder="Password" required>
        </div>
        <div id="connexioncontainer" class="form-group flex-row align-items-between mb-2">
        <button type="submit" id="btnLogin" v-on:submit.prevent="Login()" :class="{hide: logged || !renderAuth}" class="btn btn-primary mx-3 my-2">
          Log in
        </button>
        <button type="submit" id="btnSignUp" v-on:submit.prevent="SignUp()" :class="{hide: logged || !renderAuth}"  class="btn btn-primary mx-3 my-2">
          Sign Up
        </button>
        <button id="btnLogout" v-on:click="LogOut()" :class="{hide: !logged || !renderAuth}" class="btn btn-primary">
          Log out
        </button>
        <button type="button" v-on:click="googleLogin()" :class="{hide: logged || !renderAuth}" class="btn btn-primary mx-3 my-2" id="googleIn">
          Google in
        </button>
        </div>
        <div>
          <button v-on:click="play()" :class="{hide: !renderAuth}" class="btn btn-primary" id="btnplay">
            Play
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase/app'
// eslint-disable-next-line no-unused-vars
import { db } from '../db'
var provider = new Firebase.auth.GoogleAuthProvider()
export default {
  name: 'user',
  props: ['playerName'],
  data: function () {
    return {
      player: this.playerName,
      players: [],
      welcomeMessage: '',
      playerId: 0,
      logged: false,
      renderAuth: false,
      authInput: {
        txtEmail: '',
        txtPassword: ''
      }
    }
  },
  created: function () {
    if (localStorage.getItem('players') != null) {
      this.players = JSON.parse(localStorage.getItem('players'))
      this.playerId = this.players.length
    } else {
      localStorage.setItem('players', JSON.stringify(this.players))
    }
    Firebase.auth().onAuthStateChanged(this.authStateChange)
  },
  methods: {
    setPlayer: function (playerName) {
      this.player = playerName
      this.$emit('playerName', playerName)
      this.welcomeMessage = `Bonjour ${this.player} !`

      for (let i = 0; i < this.players.length; i++) {
        if (playerName === this.players[i].name) {
          this.$emit('playersArray', this.players)
          return
        }
      }
      this.players.push({ name: playerName, id: this.playerId, score: 0, rank: 0 })
      this.$emit('playersArray', this.players)
      this.playerId++
    },
    Login: function (event) {
      const email = this.authInput.txtEmail
      const pass = this.authInput.txtPassword
      const auth = Firebase.auth()
      const promise = auth.signInWithEmailAndPassword(email, pass)
      this.authInput.txtEmail = ''
      this.authInput.txtPassword = ''
      promise.catch(event => console.log(event.message))
    },
    SignUp: function (event) {
      const email = this.authInput.txtEmail
      const pass = this.authInput.txtPassword
      const auth = Firebase.auth()
      const promise = auth.createUserWithEmailAndPassword(email, pass)
      this.authInput.txtEmail = ''
      this.authInput.txtPassword = ''
      promise.catch(event => console.log(event.message))
    },
    googleLogin: function () {
      Firebase.auth().signInWithPopup(provider).then(function (result) {
        console.log(result)
      }).catch(function (error) {
        console.log(error)
      })
    },
    LogOut: function () {
      Firebase.auth().signOut()
    },
    authStateChange: function (firebaseUser) {
      if (firebaseUser) {
        firebaseUser.sendEmailVerification().then(function () {
          console.log('send Verification')
        }, function (_error) {
          console.log('not send Verification')
        })
        if (firebaseUser.emailVerified === true) {
          console.log('login success')
          this.logged = true
          if (firebaseUser.displayName) {
            this.setPlayer(firebaseUser.displayName)
          } else {
            this.setPlayer(firebaseUser.email)
          }
        } else {
          this.logged = false
          this.welcomeMessage = ''
        }
      } else {
        console.log('not loggend in')
        this.logged = false
        this.welcomeMessage = ''
      }

      if (this.renderAuth === false) {
        this.renderAuth = true
      }
    },
    play: function () {
      if (!this.player) {
        window.alert('Merci de vous connecter')
        return
      }
      this.$emit('player')
      document.querySelector('#btnplay').setAttribute('disabled', true)
    }
  }
}
</script>

<style scoped>
  .hide {
    display: none;
  }

  #usercontainer {
    display: block;
    width: 100%;
  }

  #welcomeMsg {
    text-align: center;
    display: block;
  }

  #userform
  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #btnplay {
    margin-bottom: 1vh;
  }

  #userform {
    margin-top: 1vh;
  }

  button {
    width: 6rem;
  }
</style>
