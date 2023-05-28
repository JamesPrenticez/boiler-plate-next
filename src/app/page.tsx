import { prisma } from "../../lib/prisma"

const Home = async () =>{
  const user = await prisma.user.findFirst({
    where: {
      email: "james@prentice.com"
    }
  })

  return (
    <main>Hello, {user?.firstname}</main>
  )
}

export default Home
