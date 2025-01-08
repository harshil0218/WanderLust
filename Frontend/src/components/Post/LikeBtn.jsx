import {React,useState} from 'react'
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
function LikeBtn() {
    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
  return (
    <button
              onClick={() => setLiked(!liked)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {liked ? (
                <ThumbUpAltIcon fontSize="small" className="text-blue-600" />
              ) : (
                <ThumbUpAltOutlinedIcon fontSize="small" />
              )}
              <span>{liked ? "Liked" : "Like"}{" "+likeCount}</span>
        </button>
  )
}

export default LikeBtn