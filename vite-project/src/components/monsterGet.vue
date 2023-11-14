<!-- https://github.com/ronbravo/nethack-game/tree/ronbravo/dev -->

<template>
    <div v-if="loading == true">
        <p>
            Component data is loading...
        </p> 
    </div>
    <div v-if="loading == false">
        <!-- <p> {{ name }}</p> -->
        <select name="monsterCategory" v-model="monsterType">
            <option value="insect">Insects</option>
            <option value="blob">Blobs</option>
        </select>
        <input ref="myElement" type="text" placeholder="Name" v-model="name"/>
        <div>
            <ul>
                <li v-for="key in attributes">
                    {{key}} : {{ monsterData [key] }}
                </li>
            </ul>
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
                name: "",
                attributes: [],
                monsterData: {},
                loading: true,
                monsterType: "insect",
            }
        },


        methods : {
            async getData () {
                let reply;
                let searchName = this.name;
                searchName = this.convertNameToFilename (searchName);

                try {
                    reply = await axios.get (`/api/monster/${this.monsterType}/${searchName}.json`);
                    console.log ("reply: ", reply);
                } catch (e) {
                    console.log ('Error: ', e)
                }

                
                this.attributes = Object.keys (reply.data);
                this.name = reply.data.name;
                this.monsterData = reply.data;
            },

            convertNameToFilename (name) {

                let wordArray = name.split (" ");
                let newName = "";

                if (wordArray.length > 1) {
                    for (let x = 0; x < wordArray.length; x++) {
                        
                        newName += wordArray [x];
                        if (x < wordArray.length - 1 ) {
                            newName += "-";
                        }
                    }
                } else {
                    newName = name;
                }

                newName = newName.toLowerCase ();

                return newName;
            }
        },

        mounted () {
            this.loading = false;
        },

        // updated () {
        //     console.log ("This . reply but later", this.reply, Date.now ());
        //     //this.name = this.reply.data.name;
        // }
    }
</script>

<style>
</style>