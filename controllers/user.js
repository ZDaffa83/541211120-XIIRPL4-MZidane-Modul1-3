let users = [
    {id: 1, nama: "Kin", email: "email.gmail"},
    {id: 2, nama: "Zdaffa", email: "unknownn.gmail"},
  ]

  module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url,
                message: "Your Data Successfully tracked"
            })
        }else{
            res.json({
                status: false,
                message: "Your data is Corrupted or Missing"
            })
        }
      },
      store: (req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Your Data Successfully added"
        })
      },
      update: (req, res) => {
        const id = req.params.id
        users .filter(user => {
            if (user.id == id){
                user.nama = req.body.nama
                user.email = req.body.email
                return user
            }
        })
            res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "Your Data Successfully modified"
        })
      },
      delete: (req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message: "~END~"
        })
      }
}