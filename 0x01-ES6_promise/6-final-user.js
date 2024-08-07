import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignUp(firstName, lastName, fileName) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
        return res.map((p) => ({
                status: p.status,
                value: p.status === 'fulfilled' ? p.value : String(p.reason)
            }));
    });
}
