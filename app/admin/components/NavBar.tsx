import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function NavBar(){
    return(
        <div className="flex justify-between p-6 border-b-2">
            <a href="">Logo</a>
            <a href="/admin">Home</a>
            <a href="/admin/student">Estudantes</a>
            <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/C4D03AQGsReRuSgmpeg/profile-displayphoto-shrink_200_200/0/1606418057635?e=2147483647&v=beta&t=jCISvgzR-ZrBMTGeGKkM6Fdk32vhf9X5gpO126qvceQ" alt="baby" />
                <AvatarFallback>FT</AvatarFallback>
            </Avatar>
            
        </div>
    )
}