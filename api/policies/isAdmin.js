
module.exports = async function (req, res, proceed) {

    // If `req.me` is set, then we know that this request originated
    // from a logged-in user.  So we can safely proceed to the next policy--
    // or, if this is the last policy, the relevant action.
    // > For more about where `req.me` comes from, check out this app's
    // > custom hook (`api/hooks/custom/index.js`).
    if (req.session.userId === undefined) return res.forbidden('asdf');


    if (req.session.userId) {
        let user = await User.findOne({ id: req.session.userId })
        if (user.isAdmin === true) return proceed();
    }

    //--•
    // Otherwise, this request did not come from a logged-in user.
    return res.forbidden('asdf');

};