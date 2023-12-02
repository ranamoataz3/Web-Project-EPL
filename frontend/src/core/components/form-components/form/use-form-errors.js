import { useEffect, useState } from "react";

export default function useFormErrors(form, errors, callback) {
    const [lock, setLock] = useState(false);

    useEffect(() => {
        if (errors && !lock) {
            setLock(true);
            setTimeout(() => callback(), 500);
            form.submit();
        } else setLock(false);
    }, [errors]);
}
