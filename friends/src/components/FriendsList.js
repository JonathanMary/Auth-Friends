import { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
    id: "",
    name: "",
    age: "",
    email: "",
}

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [newFriend, setNewFriend] = useState(initialFormValues);
    
    const  onChange = evt => {
        setNewFriend({...newFriend, [evt.target.name]: evt.target.value });
    }
    
    const onClick = evt => {
        evt.preventDefault();
        //setFriends([...friends, newFriend]);
        axiosWithAuth()
                .post("/api/friends", newFriend)
                .then(res => setFriends(res.data))
                .catch(err => console.log({ err }))
    }

    useEffect(() => {
        axiosWithAuth()
                .get("/api/friends")
                .then(res => {
                    setFriends(res.data)
                })
                .catch(err => console.log({ err }));
    }, []);

    return(
        <div>
            {friends.map(friend => {
                return <p key={friend.id}>{friend.name}, {friend.age}, contact:{friend.email}</p>;
            })}
            <form>
                <input type="text" placeholder="id..." onChange={onChange} name="id" value={newFriend.id} ></input>
                <input type="text" placeholder="name..." onChange={onChange} name="name" value={newFriend.name} ></input>
                <input type="text" placeholder="age..." onChange={onChange} name="age" value={newFriend.age} ></input>
                <input type="email" placeholder="email..." onChange={onChange} name="email" value={newFriend.email} ></input>
                <button onClick={onClick}>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendsList;