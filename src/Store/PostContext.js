import { createContext,useState } from "react"

export const PostContext = createContext(null)

function Post({children}){
    const [postDetails, setpostDetials] = useState()
    return(
        <PostContext.Provider value={{postDetails,setpostDetials}}>
            {children}
        </PostContext.Provider>
    )
}

export default Post