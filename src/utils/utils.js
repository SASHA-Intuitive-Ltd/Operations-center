import { useState, useEffect } from "react";

// FIXME: Could be replaced with the useMemo hook
export const useBeforeRender = (callback, deps) => {
    const [isRun, setIsRun] = useState(false);

    if (!isRun) {
        callback();
        setIsRun(true);
    }

    useEffect(() => () => setIsRun(false), deps);
};