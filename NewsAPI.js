let second = document.querySelector(".second");

        function getapi() {

            let search = document.getElementById("search").value.trim() || "bihar election";
            second.innerHTML = "<p>Loading News...</p>";

            fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=8392d73d0d53447aad17342aee7c151e`)
                .then((response) => {
                    response.json()
                        .then((data) => {
                            if (data.articles && data.articles.length > 0) {
                                second.innerHTML = "";
                                data.articles.forEach(news => {
                                    let div = document.createElement("div");
                                    div.classList.add("news-articles");
                                    div.innerHTML = `
                                        <img src = ${news.urlToImage}>
                                        <h3>${news.title}</h3>
                                        <p>${news.description}</p>
                                        <a href = ${news.url} target = "_blank">Read more</a>
                                    `;
                                    second.appendChild(div);
                                });
                            }
                            else {
                                second.innerHTML = "<p>No record on this topic</p>";
                            }
                        })
                })
                .catch((e) => {
                    second.innerHTML = "<p>Error fetching. Please try again.</p>";
                })
        }

        getapi();

        // let second = document.querySelector(".second");

        // function getapi(){
        //     // const apiKey = "8392d73d0d53447aad17342aee7c151e";
        //     const search = document.getElementById("search").value || "tesla";

        //     second.innerHTML = "<p>Loading News...</p>";

        //     fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=8392d73d0d53447aad17342aee7c151e`)
        //     .then((response) => {
        //         response.json()
        //         .then((data) => {
        //             if(data.articles && data.articles.length > 0){
        //                 second.innerHTML = "";
        //                 data.articles.forEach(news => {
        //                     const div = document.createElement("div");
        //                     div.classList.add("news-item");

        //                     div.innerHTML = `
        //                         <h3>${news.title}</h3>
        //                         <p>${news.description}</p>
        //                         <a href = "${news.url}" target = "_blank">Read more...</a>
        //                     `;

        //                     second.appendChild(div);
        //                 });
        //             }
        //             else{
        //                 second.innerHTML = "<p>No news found of this topic</p>";
        //             }
        //         });
        //     })
        //     .catch((error) => {
        //         second.innerHTML = "<p>Error fetching news. Please try again.</p>";
        //     });
        // }

        // getapi();


        // let second = document.querySelector(".second");

        // function getapi() {
        //     let search = document.getElementById("search").value || "articles";

        //     second.innerHTML = "<p>Loading News...</p>";

        //     fetch(`https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=8392d73d0d53447aad17342aee7c151e`)
        //         .then((res) => {
        //             res.json()
        //                 .then((data) => {
        //                     if (data.articles && data.articles.length > 0) {
        //                         second.innerHTML = "";
        //                         data.articles.forEach(news => {
        //                             let div = document.createElement("div");
        //                             div.classList.add("news-articles");
        //                             div.innerHTML = `<h3>${news.title}</h3>
        //                         <p>${news.description}</p>
        //                         <a href="${news.url}" target = "_blank">Read more</a>
        //                     `;
        //                             second.appendChild(div);
        //                         });
        //                     }
        //                     else {
        //                         second.innerHTML = "<p>No record on this topoc.</p>";
        //                     }
        //                 })
        //         })
        //         .catch(e => {
        //             second.innerHTML = "<p>Error fetching news. Please try again.</p> "
        //         })
        // }

        // getapi();