<template>
    <div>
        <input ref="myElement" type="text" placeholder="Name" v-model="apiData"/>
        <div>
            <button 
                v-on:click="submitForm"
                v-bind:disabled = "apiData.length == 0"
            >Touch</button>
        </div>
    </div>
    <p> {{ responseData }} </p>
</template>

<script>
    //Ref and onMounted are tools from Vue.
    //ref lets us create variables that will be integrated into the dom.
    //onMounted is vue's way of access dom elements once the dom has mounted them.
    import { ref, onMounted } from 'vue';

    export default {
        data: () => ({
            responseData : ""
        }),
        async mounted () {
            //this is an example of a "ref" that will exclusively be a string.
            const apiData = ref ('');
            //this is an example of a "ref" that will be a dom element.
            const myElement = ref ();


            //here, we create a function that a dom element can use.
            const submitForm = async () => {
                console.log (`Form submitted! Name = ${apiData.value}`)

                this.responseData = await fetch (`localhost:9002/` + apiData.value).then (response => response.json ());

                this.responseData = "hey.";
            };

            //logging out "myElement" This will return undefined even though we have declared the <input> tag above as this ref.
            //this is because this call is happening before the dom gets mounted.

            onMounted (() => {
                //now, the dom has been mounted. Vue understands what myElement is because we set the reference in the DOM. 
                console.log (myElement);

                //now that the page is loaded, we can tell the page to focus on our element.
                myElement.value.focus ();
            })

            //you have to return your data back to the page. 
            //Not sure why we need to return myElement?
            return {
                myElement,
                apiData,
                responseData,
                submitForm
            }
        }
    }

</script>

<style>
</style>