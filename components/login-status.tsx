
import { LogInContext, VendorLogInContext } from "@/Contexts";
import { useContext, useEffect, useState} from "react";
import { Text, Button } from "react-native";
import { getUser } from "@/api";
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

    const [user, setUser] = useState<User>({
            name: "test",
            email: "test",
            icon_url: "test",
            username: "test"
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
        <Text>{`Logged in as ${signedInVendor}`}</Text>
        <Button title="Sign Out" onPress={handleVendorLogout}></Button>
        </>  
        )}
        </>)}
        </>
    )





}