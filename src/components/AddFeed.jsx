import "./addfeed.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
function AddFeed() {
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImg,setProfileImg]=useState(null)
  const navigate = useNavigate();
  // const createdBy = "ayushsaxena";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text) {
      const formdata = new FormData();
      formdata.append("text", text);
      // formdata.append("createdBy", createdBy);
      if (selectedFile)
        formdata.append("photos", selectedFile, selectedFile.name);
      try {
        const response = await fetch("http://localhost:3000/api/feed", {
          method: "POST",
          body: formdata,
        });

        const data = await response.json();
        if (response.status === 201) {
          toast.success(data.message);
          console.log(data.feed);
        } else toast.error(data.message);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("text must have 5 characters");
    }
  };
  const imageUploader = (x) => {
    setSelectedFile(x);
  };
  const islogged = async () => {
    try {
      const response = await fetch("http://localhost:3000/home", {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);
      setProfileImg(data.profileImg)
      if (response.status === 307) {
        navigate("/login");
        toast.error("User Not logged In");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    islogged();
  }, []);

  return (
    <>
      <div className="addFeed">
        <div className="addFeedWrapper">
          <form onSubmit={handleSubmit}>
            <div className="addFeedTop d-flex align-items-center">
              <img
                className="addFeedImg"
                src={profileImg}
                alt="profileImg"
              />
              <input
                type="text"
                placeholder="start a post"
                className="feedInput"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="addFeedBottom">
              <label htmlFor="file">
                <div className="feedAddMedia">
                  <FontAwesomeIcon
                    icon={faImages}
                    className="addFileIcon"
                  ></FontAwesomeIcon>
                  <span className="addFileText">Add Photo</span>
                  <input
                    type="file"
                    name="photos"
                    className="fileSelect"
                    id="file"
                    onChange={(e) => {
                      imageUploader(e.target.files[0]);
                    }}
                  />
                </div>
              </label>
              <button type="submit" className="postButton ">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddFeed;
