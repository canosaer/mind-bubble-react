import tutor from '../img/tutor.jpg'
import grades from '../img/grades.jpg'
import student from '../img/student.jpg'
import topics from '../img/topics.jpg'
import handsOn from '../img/hands_on.jpg'
import online from '../img/online.jpg'
import games from '../img/games.jpg'
import community from '../img/community.jpg'
import events from '../img/events.jpg'

let featuredPrograms = {
    heading: 'Fostering a Love of Learning',
    programs: [
        {   name: 'Tutoring',
            heading: 'Free One-on-One Tutoring',
            caption: 'Meet with a volunteer tutor in-person or online and get individualized instruction in a fun, relaxed environment.',
            cards: [
                {   spotlight: false,
                    link: '#',
                    image: tutor,
                    heading: 'Tutors',
                },
                {   spotlight: true,
                    link: '#',
                    image: grades,
                    heading: 'Grades 4-10:',
                    text: 'Get individualized support for academics, test prep, enrichment, and learning differences.',
                },
                {   spotlight: false,
                    link: '#',
                    image: student,
                    heading: 'Schedule',
                }
            ],
        },
        {   name: 'Workshops',
            heading: 'Free Educational Workshops',
            caption: 'Led by experts in a variety of topics, our free workshops offer students in grades 4-10 a fun and engaging way to learn.',
            cards: [
                {   spotlight: false,
                    link: '#',
                    image: topics,
                    heading: 'Topics',
                },
                {   spotlight: true,
                    link: '#',
                    image: handsOn,
                    heading: 'Hands on Learning:',
                    text: 'Our workshops ignite passion for a topic that follows students far beyond the end of the session.',
                },
                {   spotlight: false,
                    link: '#',
                    image: online,
                    heading: 'Online Workshops',
                }
            ],
        },
        {   name: 'Games',
            heading: 'Games Raise Grades',
            caption: "Mind Bubble's board game library provides opportunities for students to build relationships and think critically while having fun!",
            cards: [
                {   spotlight: false,
                    link: '#',
                    image: games,
                    heading: 'Games',
                },
                {   spotlight: true,
                    link: '#',
                    image: community,
                    heading: 'A Light-Hearted Community:',
                    text: "Mind Bubble is more than a tutoring company, it's a light-hearted learning community where students build warm relationships while having fun.",
                },
                {   spotlight: false,
                    link: '#',
                    image: events,
                    heading: 'Special Events',
                }
            ],
        },
    ],
}

export default featuredPrograms