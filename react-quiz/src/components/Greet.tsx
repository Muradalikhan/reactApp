
type GreetProps = {
    username: string;
    msgsRec: number;
    isLoggedIn: boolean;
}

export const Greet = ({ username, msgsRec, isLoggedIn }: GreetProps) => {



    return (
        <div>
            {isLoggedIn ? <p>Welcome {username}! you have {msgsRec} messages</p> :
                <p>user is not login</p>
            }
        </div>
    )
}