import axios from "axios"

export const useBackend = () => {


    //COACHES
    async function GetAllCoaches() {
        const res = await axios.get('https://localhost:7150/coaches/getAllCoaches');
        return res;
    }

    async function GetSampleCoaches() {
        const res = await axios.get('https://localhost:7150/coaches/getSampleCoaches');
        return res;
    }

    async function GetCoachByGameID(gameID) {
        const res = await axios.get('https://localhost:7150/coaches/getCoachByGame/' + gameID);
        return res;
    }

    async function GetCoachDetail(coachID) {
        const res = await axios.get('https://localhost:7150/coaches/getCoachDetail/' + coachID);
        return res;
    }

    async function InsertCoach(coachName, coachPassword, coachDescription, coachPicture, coachPrice, coachGameID) {
        const res = await axios.post('https://localhost:7150/coaches/insertCoach', {
            coachName: coachName,
            coachPassword: coachPassword,
            coachDescription: coachDescription,
            coachPicture: coachPicture,
            coachPrice: coachPrice,
            coachGameID: coachGameID,
        });
        return res;
    }

    //COACH ORDERS
    async function GetCoachOrderByUserID(userID) {
        const res = await axios.get('https://localhost:7150/coachOrders/getOrderByUserID/' + userID);
        return res;
    }

    async function GetCoachOrderByCoachID(coachID) {
        const res = await axios.get('https://localhost:7150/coachOrders/getOrderByCoachID/' + coachID);
        return res;
    }

    async function UpdateCoachOrderStatus(orderID, update) {
        const res = await axios.put('https://localhost:7150/coachOrders/updateStatus/' + orderID + {
            update: update
        });
        return res;
    }

    async function InsertCoachOrder(customerID, sellerID, orderType, orderStatus, orderPrice) {
        const res = await axios.put('https://localhost:7150/coachOrders/insertOrder', {
            customerID: customerID,
            sellerID: sellerID,
            orderType: orderType,
            orderStatus: orderStatus,
            orderPrice: orderPrice,
        });
        return res;
    }

    //COMMENTS
    async function GetCommentsByID(ID) {
        const res = await axios.get('https://localhost:7150/comments/getComments/' + ID);
        return res;
    }

    async function InsertComment(commentedUser, commentContent, commentSender, commentRating, commentPicture, commentType) {
        const res = await axios.post('https://localhost:7150/comments/insertComment', {
            commentedUser: commentedUser,
            commentContent: commentContent,
            commentSender: commentSender,
            commentRating: commentRating,
            commentPicture: commentPicture,
            commentType: commentType
        });
        return res;
    }

    //EVENTS
    async function GetAllEvents() {
        const res = await axios.get('https://localhost:7150/events/getAllEvents');
        return res
    }

    async function GetEventByGame(gameID) {
        const res = await axios.get('https://localhost:7150/events/getEventByGame/' + gameID);
        return res;
    }

    async function InsertEvent(eventWriter, eventName, eventDescription, eventPicture, startDate, endDate, eventGameID) {
        const res = await axios.post('https://localhost:7150/events/insertEvent', {
            eventWriter: eventWriter,
            eventName: eventName,
            eventDescription: eventDescription,
            eventPicture: eventPicture,
            startDate: startDate,
            endDate: endDate,
            eventGameID: eventGameID
        });
        return res;
    }

    //GAMES
    async function GetAllGames() {
        const res = await axios.get('https://localhost:7150/games/getAllGames');
        return res;
    }

    async function GetGamesByID(gameID) {
        const res = await axios.get('https://localhost:7150/games/getGameByID/' + gameID);
        return res;
    }


    //USER ORDERS
    async function GetUserOrderByUserID(userID) {
        const res = await axios.get('https://localhost:7150/userOrders/getOrderByUserID/' + userID);
        return res;
    }

    async function UpdateUserOrderStatus(orderID, update) {
        const res = await axios.put('https://localhost:7150/userOrders/updateStatus/' + orderID, {
            update: update
        });
        return res;
    }

    async function InsertUserOrder(customerID, sellerID, orderType, orderStatus, orderPrice) {
        const res = await axios.put('https://localhost:7150/userOrders/insertOrder', {
            customerID: customerID,
            sellerID: sellerID,
            orderType: orderType,
            orderStatus: orderStatus,
            orderPrice: orderPrice,
        });
        return res;
    }

    //USERS
    async function GetAllUsers() {
        const res = await axios.get('https://localhost:7150/users/getAllUsers');
        return res;
    }

    async function GetSampleUsers() {
        const res = await axios.get('https://localhost:7150/users/getSampleUsers');
        return res;
    }

    async function GetUserByGameID(gameID) {
        const res = await axios.get('https://localhost:7150/users/getUserByGame/' + gameID);
        return res;
    }

    async function GetUserDetail(userID) {
        const res = await axios.get('https://localhost:7150/users/getUserDetail/' + userID);
        return res;
    }

    async function UserLogin(userName, userPassword) {
        const res = await axios.post('https://localhost:7150/users/userLogin', {
            userName: userName,
            userPassword: userPassword,
        });
        return res;
    }

    async function InsertUser(userName, userPassword, userDescription, userPicture, userIsPlayer, userPrice, userGameID) {
        const res = await axios.post('https://localhost:7150/users/insertUser', {
            userName: userName,
            userPassword: userPassword,
            userDescription: userDescription,
            userPicture: userPicture,
            userIsPlayer: userIsPlayer,
            userPrice: userPrice,
            userGameID: userGameID
        });
        return res;
    }

    async function UpdateUser(userName, userPassword, userDescription, userPicture, userIsPlayer, userPrice, userGameID) {
        const res = await axios.post('https://localhost:7150/users/updateUser', {
            userName: userName,
            userPassword: userPassword,
            userDescription: userDescription,
            userPicture: userPicture,
            userIsPlayer: userIsPlayer,
            userPrice: userPrice,
            userGameID: userGameID
        });
        return res;
    }

    //WALLETS
    async function GetAllWallets() {
        const res = await axios.get('https://localhost:7150/wallets/getAllWallets');
        return res;
    }

    async function GetWalletByOwnerID(ownerID) {
        const res = await axios.get('https://localhost:7150/wallets/getWalletByOwnerID/' + ownerID);
        return res;
    }

    async function PurchaseService(walletOwnerID, value) {
        const res = await axios.put('https://localhost:7150/wallets/purchaseService/' + walletOwnerID, {
            value: value
        });
        return res;
    }

    async function InsertWallet(walletOwnerID, currencyOwned) {
        const res = await axios.post('https://localhost:7150/wallets/insertWallet', {
            walletOwnerID: walletOwnerID,
            currencyOwned: currencyOwned
        });
        return res;
    }

    // async function functionName(){
    //     const res = await axios.;
    //     return res;
    // }
    // https://localhost:7150/

    return {
        GetAllCoaches, GetSampleCoaches, GetCoachByGameID, GetCoachDetail, InsertCoach, GetCoachOrderByUserID, GetCoachOrderByCoachID, UpdateCoachOrderStatus, InsertCoachOrder,
        GetCommentsByID, InsertComment, GetAllEvents, GetEventByGame, InsertEvent, GetAllGames, GetGamesByID, GetUserOrderByUserID, UpdateUserOrderStatus, InsertUserOrder,
        GetAllUsers, GetSampleUsers, GetUserByGameID, GetUserDetail, UserLogin, InsertUser, UpdateUser, GetAllWallets, GetWalletByOwnerID, PurchaseService, InsertWallet
    }
}