const mess = []
let id = 0

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        mess.push({
            id, text, time
        })
        id++
        res.status(200).send(mess)
    },
    read: (req, res) => {
        res.status(200).send(mess)
    },
    update: (req, res) => {
        const {text} = req.body
        const updateID = req.params.id
        const messIndex = mess.findIndex(message => message.id == updateID)
        let message = mess[messIndex]

        mess[messIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(mess)
    },
    delete: (req, res) => {
        const deleteID = req.params.id
        const messageIndex = mess.findIndex(message => message.id = deleteID)
        mess.splice(messageIndex, 1)
        res.status(200).send(mess)
    }
}