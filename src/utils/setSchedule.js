const setSchedule = ({ cluster, classroomList = [], roomList = [] }) => {
    let crList = [...classroomList]
    let rList = [...roomList]

    // set priority
    crList.map(cr => {
        cr.priority = (cr.numberOfPupils * (cr.dayType === 'full' ? 6 : 3) / cr.learnDay)
        return cr
    }).sort((a, b) => a.priority - b.priority)


    // set status day
    rList.map(r => {
        r.odd = r.even = r.full = cluster.beginDay
        return r
    })

    // // filter big classroom
    // let bigCr = crList.filter(cr => cr.numberOfPupils > 30).sort((a, b) => b.priority - a.priority)

    // // filter small classroom
    // let smallCr = crList.filter(cr => cr.numberOfPupils <= 30).sort((a, b) => b.priority - a.priority)

    // // filter big room
    // let bigR = rList.filter(r => r.maxPupils > 30)

    // // handle big classroom with big room
    // handler(bigCr, bigR)

    // // priority for small room
    // let smallPriorityRoom = rList.sort((a, b) => a.maxPupils === 30 ? -1 : 1)

    // // handle small room with priority small room
    // handler(smallCr, smallPriorityRoom)
    handler(crList, rList)
    return { cluster, crList, rList }
}
const handler = (classroomList = [], roomList = []) => {

    //  with begin day add toggle learn day == finish day
    const addDate = (date, number) => {

        let d = new Date(date)
        return new Date(d.setDate(d.getDate() + number))
    }

    // compute total day by learn day
    const totalDay = (date, type, number) => {
        let d = new Date(date)
        let bonus = 1
        if (type === 'odd' && d.getDay() % 2 === 1)
            bonus += 1
        if (type === 'even') {
            if (d.getDay() === 6) {
                bonus += 2
            }
            else {
                if (d.getDay() % 2 === 0 && d.getDay() !== 0)
                    bonus += 1
            }
        }

        if (d.getDay() === 0)
            bonus += 1
        return type === 'full'
            ? Math.floor(number / 6) * 7 + number % 6 + bonus
            : Math.floor(number / 3) * 7 + (number % 3) * 2 + bonus
    }

    // handle attach room to class room
    classroomList.forEach(cr => {
        let choosen = {}
        roomList.forEach(r => {

            if (r.roomType === cr.roomType && r.maxPupils >= cr.numberOfPupils) {
                if (!choosen.length) {
                    choosen = r
                }
                if (r[cr.dayType] > choosen[cr.dayType])
                    choosen = r
            }
        })
        cr.beginDay = choosen[cr.dayType]
        cr.finishDay = addDate(cr.beginDay, totalDay(cr.beginDay, cr.dayType, cr.learnDay)).toLocaleDateString()

        cr.roomName = choosen.name

        if (cr.roomType === 'full') {
            choosen.full = cr.finishDay
        } else {
            choosen[cr.dayType] = cr.finishDay
            choosen['full'] = cr.finishDay
        }
    })
}
export default setSchedule