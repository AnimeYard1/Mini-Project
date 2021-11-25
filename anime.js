const episode = document.querySelector('.episodes');
                   
                    let dat = [
    {
        "link":"https://youtu.be/D3p9BDePmKY",
        "no":"1"
    },
    {
        "link":"https://www.youtube.com/embed/wWANEayJQbI",
        "no":"2"
    },
    {
        "link":"https://www.youtube.com/embed/FFyfHCEfXqk",
        "no":"3"
    },
    {
        "link":"https://www.youtube.com/embed/ZKHD17Y9O70",
        "no":"4"
    },
    {
        "link":"https://www.youtube.com/embed/Wbu6KG7cHpM",
        "no":"5"
    },
    {
        "link":"https://www.youtube.com/embed/QMcvys4NjP0",
        "no":"6"
    },
    {
        "link":"https://www.youtube.com/embed/v-CgUmAgu9g",
        "no":"7"
    },
    {
        "link":"https://www.youtube.com/embed/l5p_baKxGeg",
        "no":"8"
    },
    {
        "link":"https://www.youtube.com/embed/toK8bmxhGhE",
        "no":"9"
    },
    {
        "link":"https://www.youtube.com/embed/E0I78RfkhN8",
        "no":"10"
    }

];
                    console.log("data:"+dat);
                    let html = "";
                    let no1 = "";
                     dat.map((item,index)=>{
                        html += `<a href=${item.link} onclick="change(${item.no})" target="animee"><button class="button">${index+1}</button></a>`;
                        episode.innerHTML = html;
                     })
                     function change(no)
                     {
                        const no1 = document.getElementById("episodeno");
                        no1.innerHTML = "Episode "+no;
                     }
                       