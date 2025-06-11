import { LogInContext, VendorLogInContext} from "@/Contexts";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useContext } from 'react';




export default function TabLayout() {
  const logInContext = useContext(LogInContext);
  const vendorLogInContext = useContext(VendorLogInContext)

  const { signedInUser, setSignedInUser } = logInContext;
  const { signedInVendor, setSignedInVendor} = vendorLogInContext
  
  console.log(Boolean(signedInUser))
  console.log(Boolean(signedInVendor))
  console.log(signedInUser, "logged in as user ")
  console.log(signedInVendor, "logged in as vendor")


  return (
    <>
    {!signedInUser && !signedInVendor ? (

      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          href: null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="restaurants"
        options={{
          title: 'Restaurants',
          href: null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="reservations"
        options={{
          title: 'Reservations',
          href: null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>



    ) : (

      signedInUser ? (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="restaurants"
        options={{
          title: 'Restaurants',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="reservations"
        options={{
          title: 'Reservations',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>

      ) : (
      <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="restaurants"
        options={{
          title: 'Restaurants',
          href: null,
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="reservations"
        options={{
          title: 'Reservations',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>)

    )}


    
    </>
  );
}
