//?database ile bilgi ekleme-bilgİ alma-degiştirme-silme

import firebase from "./firebase"
import { getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import { useEffect, useState } from "react";


//bilgi ekleme
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"baglanti")
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info. phoneNumber,
        gender:info.gender
    })
}

//bilgi cagırma
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"baglanti");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

//bilgi silme
export const DeleteUser=(id)=>{

    const db = getDatabase();
    const userRef=ref(db,"baglanti");
    remove(ref(db,"baglanti/"+id))
}

//bilgi degiştirme
export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["baglanti/"+info.id]=info;
    return update(ref(db),updates);

}