import React, { useState } from 'react'

export default function () {
    const [value, setValue] = useState("");
    
    const onChange = (e) => {
        setValue(e.target.value);
    };

    return {value, onChange};
}