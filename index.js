

// Dummy Data end here
/* <div class="post">
            <h3 class="post-title">Heading</h3>
            <p class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.
            </p>
        </div> */

// Fatch API Data

const fatchData = async (config) => {
    try{
        const res = await axios(config);
        return res.data;
    }catch(error){
        throw Error("Data is not Found");
    }
};


const postsElement = document.querySelector(".posts");
const loadAllData = async () => {
    const posts = await fatchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post)=> {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);

    });
};
loadAllData();