import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

// Define the Member type
type Member = {
  id: number
  name: string
  imageUrl: string
  pledgeClass: string
  linkedinUrl: string
}

// Sample data for members
const members: Member[] = [
  { id: 1, name: "Katie Mangus", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2021", linkedinUrl: "www.linkedin.com/in/kathryn-mangus" },
  { id: 2, name: "Spencer Ball", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2021", linkedinUrl: "https://www.linkedin.com/in/spencerballcs" },
  { id: 3, name: "Isabella Michael", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022", linkedinUrl: "https://www.linkedin.com/in/isabella-michael-7ab35b237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 4, name: "Emilie Nogosek", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022", linkedinUrl: "https://www.linkedin.com/in/emilie-nogosek-139b6a235"  },
  { id: 5, name: "Allicia Moeller", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022", linkedinUrl: "https://www.linkedin.com/in/allicia-moeller"  },
  { id: 6, name: "Jacob Pellinen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022", linkedinUrl: "https:/www.linkedin.com/in/jacob-pellinen"  },
  { id: 7, name: "Lucas Grad", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022", linkedinUrl: "https://www.linkedin.com/in/lucas-grad-285130232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  },
  { id: 8, name: "Reese Highbloom", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2022" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 9, name: "Lily Anderson", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 10, name: "Ike Fritz", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022", linkedinUrl: "https://www.linkedin.com/in/ike-fritz"  },
  { id: 11, name: "Duncan Lawler", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022", linkedinUrl: "https://www.linkedin.com/in/duncannlawler" },
  { id: 12, name: "Liam Gaiden", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" , linkedinUrl: "https://www.linkedin.com/in/liam-gaiden" },
  { id: 13, name: "Mariana Alibali", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" , linkedinUrl: "https://www.linkedin.com/in/mariana-alibali" },
  { id: 14, name: "Rhea Marwaha", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 15, name: "Grace Bowen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2022", linkedinUrl: "https://www.linkedin.com/in/grace-bowen-1047a6247/"  },
  { id: 16, name: "Ryan Hogan", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "https://www.linkedin.com/in/ryanhogan77"  },
  { id: 17, name: "Caden McDaniel", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 18, name: "Sami Breault", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "https://www.linkedin.com/in/samantha-breault-0b015b291?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkF3af%2FrgTOW3tT1NTSSvig%3D%3D"  },
  { id: 19, name: "Noah Kleven", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "http://linkedin.com/in/noah-kleven"  },
  { id: 20, name: "Eliza Robinson", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 21, name: "Ben Levy", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023", linkedinUrl: "https://www.linkedin.com/in/ben-levy-125781206"  },
  { id: 22, name: "Zach Wagner", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 23, name: "Arshiya Chugh", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2023" , linkedinUrl: "https://www.linkedin.com/in/arshiya-chugh-b67114261" },
  { id: 24, name: "Mihir Patil", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 25, name: "Drew Hay", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" , linkedinUrl: "https://www.linkedin.com/in/drewzhay" },
  { id: 26, name: "Bryan Heaton", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/bryanmheaton" },
  { id: 27, name: "Chase Ott", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/chaseott"  },
  { id: 28, name: "Logan Soderholm", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 29, name: "Meghan", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 30, name: "Navya Jain", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 31, name: "Theo Fowler", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023"  , linkedinUrl: "https://www.linkedin.com/in/theo-fowler-82037432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { id: 32, name: "Drew Polzin", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 33, name: "Annelise Jacobsen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 34, name: "Zahabiyah Boty", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/zahabiyah-boty/"  },
  { id: 35, name: "Jackie Behring", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2023", linkedinUrl: "https://www.linkedin.com/in/jacqueline-behring-645853310/"  },
  { id: 36, name: "Gianna McLeod", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/gianna-mcleod/" },
  { id: 37, name: "Ben Bossman", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 38, name: "Sophia Prondzinski", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/sophia-prondzinski"  },
  { id: 39, name: "Sydney Magee", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/sydney-magee-a9a0232b4" },
  { id: 40, name: "Elaine Wixted", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 41, name: "Peter Vasterling", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/peter-vasterling" },
  { id: 42, name: "Annie Zhao", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/-annie-zhao/" },
  { id: 43, name: "Paulina Castaneda", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/paulina-castaneda1"  },
  { id: 44, name: "Bennett Kinney", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/bennett-kinney-2893b9199/" },
  { id: 45, name: "Kate Breisemeister", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/katebriesemeister/"  },
  { id: 46, name: "Shubh Arora", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 47, name: "Izzy Zeman", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 48, name: "Henry Czupryna", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/henry-czupryna-2b3044250/" },
  { id: 49, name: "Elizabeth Risgaard", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/elizabeth-risgaard-960b642b2"  },
  { id: 50, name: "Jack Pinto", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/john-pinto-590465162?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"  },
  { id: 51, name: "Drew Kastenshmidt", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/drew-kastenschmidt-369580327/"  },
  { id: 52, name: "Kayla Radtke", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/kayla-radtke" },
  { id: 53, name: "Masa Abboud", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 54, name: "Jaden Tan", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024" , linkedinUrl: "https://www.linkedin.com/in/jaden-tann" },
  { id: 55, name: "Walter Van Dyke", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Spring 2024", linkedinUrl: "https://www.linkedin.com/in/walter-van-dyke"  },
  { id: 56, name: "Garret Donohue", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/garret-donohue" },
  { id: 57, name: "Abby Burger", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/abby-burger-07708232a"  },
  { id: 58, name: "Violet Urdahl", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/violet-urdahl" },
  { id: 59, name: "Hadeel Manimaran", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/hadeelmanimaran/"  },
  { id: 60, name: "Damek Mangum", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/damek-mangum-b93186223" },
  { id: 61, name: "Ben Walther", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/ben-walther-304305307/" },
  { id: 62, name: "Siri Stolen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 63, name: "Aadya Ganjigunta", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 64, name: "Christian Sacia-Garcia", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/christian-sacia-garcia"  },
  { id: 65, name: "Chandini Krejcarek", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/johndoe" },
  { id: 66, name: "Neil Deore", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/neildeore" },
  { id: 67, name: "Emma Stroshane", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/EmmaStroshane" },
  { id: 68, name: "Julia Geng", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/julia-geng-543b672a8/"  },
  { id: 69, name: "Alex Haas", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 70, name: "Ellie Fecko", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 71, name: "Joseph McIlwain", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/joseph-mcilwain-a79382331" },
  { id: 72, name: "Alan Chen", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "http://linkedin.com/in/alan-chen-52122a2a2" },
  { id: 73, name: "Noahdiah Lisowski", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024" , linkedinUrl: "https://www.linkedin.com/in/NoahdiahLisowski" },
  { id: 74, name: "Ben Walther", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/johndoe"  },
  { id: 75, name: "Sam Snyder", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/sam-snyder-318942327"  },
  { id: 76, name: "Evan Loe", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/evan-loe-a940b0266/"  },
  { id: 77, name: "Carson Donze", imageUrl: "/placeholder.svg?height=200&width=200", pledgeClass: "Fall 2024", linkedinUrl: "https://www.linkedin.com/in/carson-donze-52b48632a/"  }
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
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-12 text-center text-red-800">Engineering Fraternity Members</h1>
        {Object.entries(groupedMembers).map(([pledgeClass, members]) => (
          <div key={pledgeClass} className="mb-12">
            <h2 className="text-xl font-semibold mb-6 text-red-700 border-b border-red-200 pb-2">{pledgeClass}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {members.map((member) => (
                <Card key={member.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative w-full pb-[100%] mb-3">
                      <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <Link
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center font-medium text-gray-700 hover:text-red-600 transition-colors block"
                    >
                      {member.name}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

