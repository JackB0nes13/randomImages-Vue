

export default { 

    data() { 
        return { 
            length : {},
            image : {},
        }
    },
    methods : { 
        async fetchApi(){ 
            let x = document.title;
            let API = (`http://127.0.0.1:8000/images/${x}`);
            await axios.get(API)
            .then((response) => { 
                for (let i = 0; i < response.data.length; i++) {
                    this.image[i] = response.data[i];
                    console.log(this.image[i]);
                    let v = document.getElementById('app');
                    let url = this.image[i];
                    v.insertAdjacentHTML('beforeend', `<img src=${url}>`);
                  }
        })
        .catch((error)=>{
            console.log(error)
        })
        
           
        }
    },
 
    mounted() { 
        this.fetchApi()
    },

  }