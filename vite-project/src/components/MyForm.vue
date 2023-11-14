<!-- https://github.com/ronbravo/nethack-game/tree/ronbravo/dev -->

<template>
    <div>
        <p>
            Component data is loading...
        </p> 
    </div>
    <div v-if="loading == false">
        <p> {{ name }}</p>
        <input ref="myElement" type="text" placeholder="Name" v-model="name"/>
        <div>
            <!-- <ul>
                <li v-for="item in abilities">
                    {{ item.ability.name }}
                </li>
            </ul> -->
        </div>
        <div>
            <button 
                @click="getData"
            >Submit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {
                reply: {},
                name: "bob",
                abilities: [],
                loading: true,
            }
        },


        methods : {
            async getData () {
                // let reply = await axios.get ("https://pokeapi.co/api/v2/pokemon/ditto");
               let reply;

                try {
                    reply = await axios.get (`/api/monster/insect/spiderman.json`);
                    // reply = await axios.get (`/pokemon/v2/pokemon/charmander`);
                    // reply = await axios.get (`/pokemon`);
                    // reply = await axios.get ("https://pokeapi.co/api/v2/pokemon/ditto");
                    // reply = await axios.get ("localhost:9002/api/monster/insect/spiderman.json");
                    console.log ("reply: ", reply);
                } catch (e) {
                    console.log ('Error: ', e)
                }

                
                // this.abilities = reply.data.abilities;
                // this.reply = reply;
                // console.log (this.reply, Date.now ());
                // console.log ("Get data...");
                // this.name = this.name + "carl";
                // setTimeout (() => {
                                        
                // }, 1000);
            },
        },

        mounted () {
            this.loading = false;
        },

        updated () {
            console.log ("This . reply but later", this.reply, Date.now ());
            //this.name = this.reply.data.name;
        }
    }
</script>

<style>
</style>