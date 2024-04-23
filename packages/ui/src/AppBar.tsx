import { Button } from "./Button"

interface appBarProps {
    onSignIn: ()=>void,
    onSignOut: ()=>void,
    user?: {
        name?: string | null
    }
}


export function AppBar({ onSignIn, onSignOut, user }: appBarProps){
    return(
        <div className="py-2 px-4 mb-2 border-b">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-medium">
                    GoPay
                </div>
                <div>
                    <Button onClick={user ? onSignOut : onSignIn }>{user ? "Logout" : "Login"}</Button>
                </div>
            </div>
        </div>
    )
}