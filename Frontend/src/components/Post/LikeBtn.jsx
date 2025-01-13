import {React,useState} from 'react'
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
function LikeBtn({likeCount}) {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(likeCount)

    const handleLike = () => {
        setLiked(!liked)
        if(liked){
            setLikes(likes - 1)
        }else{
            setLikes(likes + 1)
        }
    }
  return (
    <button
              onClick={handleLike}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {liked ? (
                <ThumbUpAltIcon fontSize="small" className="text-blue-600" />
                
              ) : (
                <ThumbUpAltOutlinedIcon fontSize="small" />
              )}
              <span>{liked ? "Liked" : "Like"}{" "+likes}</span>
        </button>
  )
}

export default LikeBtn