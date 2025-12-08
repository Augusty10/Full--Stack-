function fetchPostData(){
           return new Promise((resolve)=> {
                setTimeout(() => {
                    resolve("Post Data fetched ")
                }, 2000)
           })
}

function fetchCommentData(){
    return new promise((resolve )=> {
        setTimeout(()=>{
            resolve(" Connection Data fetched... ");

        }, 3000);

    });
}

async function  getBlogData() {
   try{
    console.log(" Fetching blog data ");
     // const blogdata = await fetchPostData();
    // const commentData = await fetchConnectionData();

     const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()])

    console.log(blogdata);
    console.log(commentData);
    
   } catch(eror) {
         console.error(" Error fetchung  Blog Data...", error )

   }

}

getBlogData(); 