import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Define the Member type
type Member = {
  id: number
  name: string
  imageUrl: string
  pledgeClass: string
}

// Sample data for members
const members: Member[] = [
  { id: 1, name: "Katie Mangus", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2021" },
  { id: 2, name: "Lily Anderson", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 3, name: "Ike Fritz", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 4, name: "Duncan Lawler", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 5, name: "Liam Gaiden", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 6, name: "Mariana Alibali", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 7, name: "Rhea Marwaha", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 8, name: "Grace Bowen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" },
  { id: 9, name: "Mihir Patil", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 10, name: "Drew Hay", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 11, name: "Bryan Heaton", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 12, name: "Chase Ott", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 13, name: "Logan Soderholm", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 14, name: "Meghan", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 15, name: "Navya Jain", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 16, name: "Theo Fowler", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 17, name: "Drew Polzin", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 18, name: "Annelise Jacobsen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 19, name: "Zahabiyah", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 20, name: "Jackie Behring", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" },
  { id: 21, name: "Garret Donohue", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 22, name: "Abby Burger", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 23, name: "Violet Urdahl", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 24, name: "Hadeel Manimaran", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 25, name: "Damek Mangum", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 26, name: "Ben Walther", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 27, name: "Siri Stolen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 28, name: "Aadya Ganjigunta", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 29, name: "Christian Sacia-Garcia", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 30, name: "Chandini Krejcarek", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 31, name: "Neil Deore", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 32, name: "Emma Stroshane", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 33, name: "Julia Geng", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 34, name: "Alex Haas", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 35, name: "Ellie Fecko", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 36, name: "Joseph McIlwain", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 37, name: "Alan Chen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 38, name: "Abby Burger", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 39, name: "Violet Urdahl", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  { id: 40, name: "Hadeel Manimaran", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" },
  
  // Add more members as needed
]

// Group members by pledge class
const groupMembersByPledgeClass = (members: Member[]): Record<string, Member[]> => {
  return members.reduce(
    (groups, member) => {
      const { pledgeClass } = member
      if (!groups[pledgeClass]) {
        groups[pledgeClass] = []
      }
      groups[pledgeClass].push(member)
      return groups
    },
    {} as Record<string, Member[]>,
  )
}

export default function MembersPage() {
  const groupedMembers = groupMembersByPledgeClass(members)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Members</h1>
      {Object.entries(groupedMembers).map(([pledgeClass, members]) => (
        <div key={pledgeClass} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{pledgeClass}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <Image
                    src={member.imageUrl || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <p className="mt-2 text-center font-medium">{member.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

