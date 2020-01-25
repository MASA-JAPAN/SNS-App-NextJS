import * as firebase from "firebase/app";
import { firebaseConfig } from "../../config";

export default (req: any, res: any) => {
  console.log(req);

  firebase.initializeApp(firebaseConfig);

  return res.status(200).send({ status: "success" });
};
