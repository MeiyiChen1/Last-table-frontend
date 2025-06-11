
import { LogInContext, VendorLogInContext } from "@/Contexts";
import { useContext, useEffect, useState} from "react";
import { Text, Button } from "react-native";
import { getUser, getVendorById } from "@/api";
import { useRouter } from "expo-router";


export default function LoginStatus() {

    const logInContext = useContext(LogInContext);
    const { signedInUser, setSignedInUser } = logInContext;
    const vendorLogInContext = useContext(VendorLogInContext)
    const {signedInVendor, setSignedInVendor} = vendorLogInContext

    type User = {
    name: string,
    email: string,
    icon_url: string,
    username: string,
    }

    type Vendor = {
      username: string,
      icon_url: string,
      telephone_number: string,
      location_data: string,
      restaurant_type: string
    }



    const [user, setUser] = useState<User>({
            name: "test",
            email: "test",
            icon_url: "test",
            username: "test"
        })

    
    const [vendor, setVendor] = useState<Vendor>({
                  username: "PaStation London",
                  icon_url: "test",
                  telephone_number: "07xxx 1x4140",
                  location_data: "76 Tottenham Ct Rd, London W1T 2HG",
                  restaurant_type: "Italian"
              })



    useEffect(() => {
        
            if (!signedInUser) {
        
            } else {
              getUser(signedInUser)
            .then(result => {
              setUser(result.user)
            })
            }
          }, [signedInUser])




    useEffect(() => {
        if (!signedInVendor) {
    
        } else {
            getVendorById(signedInVendor)
            .then(result => setVendor(result))
        }
    }, [signedInVendor])


    const router = useRouter()

    function handleUserLogout() {
        setSignedInUser(null)
        setSignedInVendor(null)  
        router.navigate("/(tabs)")
    }

    function handleVendorLogout() {
        setSignedInUser(null)
        setSignedInVendor(null)
        router.navigate("/(tabs)")
    }

    return (
        <>
        {!signedInUser && !signedInVendor ? 
        (
            <></>
        ) : 
        (
        <>
        {signedInUser ? 
        (
        <>
        <Text>{`Logged in as ${user.username}`}</Text>
        <Button title="Sign Out" onPress={handleUserLogout}></Button>
        </>
        ) : 
        (
        <>
        <Text>{`Logged in as ${vendor.username}`}</Text>
        <Button title="Sign Out" onPress={handleVendorLogout}></Button>
        </>  
        )}
        </>)}
        </>
    )





}