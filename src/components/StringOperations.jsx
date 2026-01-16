import React, { useState } from 'react';

const StringOperations = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('Result will appear here');

    const handleAction = (action) => {
        let res = '';
        const str = input;

        switch (action) {
            case 'length':
                res = `Length: ${str.length}`;
                break;
            case 'uppercase':
                res = str.toUpperCase();
                break;
            case 'lowercase':
                res = str.toLowerCase();
                break;
            case 'reverse':
                res = str.split('').reverse().join('');
                break;
            case 'trim':
                res = str.trim();
                break;
            case 'capitalize':
                res = str.split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ');
                break;
            case 'wordCount':
                const words = str.trim().split(/\s+/).filter(word => word.length > 0);
                res = `Word Count: ${words.length}`;
                break;
            case 'charCount':
                const chars = str.replace(/\s/g, '').length;
                res = `Character Count (no spaces): ${chars}`;
                break;
            case 'palindrome':
                const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
                const reversed = cleaned.split('').reverse().join('');
                res = cleaned === reversed && cleaned.length > 0 ? 'Yes, it is a palindrome!' : 'No, not a palindrome.';
                break;
            case 'vowelCount':
                const vowels = (str.match(/[aeiouAEIOU]/g) || []).length;
                res = `Vowel Count: ${vowels}`;
                break;
            case 'consonantCount':
                const consonants = (str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;
                res = `Consonant Count: ${consonants}`;
                break;
            case 'removeSpaces':
                res = str.replace(/\s+/g, '');
                break;
            case 'clearStr':
                setInput('');
                res = 'Result will appear here';
                break;
            default:
                break;
        }

        setResult(res);
    };

    return (
        <div className="string-wrapper">
            <div className="display string-display">
                <textarea
                    id="stringInput"
                    placeholder="Enter your string here..."
                    rows="3"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                ></textarea>
                <div className="string-result" id="stringResult">{result}</div>
            </div>
            <div className="string-buttons">
                <button className="btn string-btn" onClick={() => handleAction('length')}>Length</button>
                <button className="btn string-btn" onClick={() => handleAction('uppercase')}>UPPERCASE</button>
                <button className="btn string-btn" onClick={() => handleAction('lowercase')}>lowercase</button>
                <button className="btn string-btn" onClick={() => handleAction('reverse')}>Reverse</button>
                <button className="btn string-btn" onClick={() => handleAction('trim')}>Trim</button>
                <button className="btn string-btn" onClick={() => handleAction('capitalize')}>Capitalize</button>
                <button className="btn string-btn" onClick={() => handleAction('wordCount')}>Word Count</button>
                <button className="btn string-btn" onClick={() => handleAction('charCount')}>Char Count</button>
                <button className="btn string-btn" onClick={() => handleAction('palindrome')}>Is Palindrome?</button>
                <button className="btn string-btn" onClick={() => handleAction('vowelCount')}>Vowel Count</button>
                <button className="btn string-btn" onClick={() => handleAction('consonantCount')}>Consonant Count</button>
                <button className="btn string-btn" onClick={() => handleAction('removeSpaces')}>Remove Spaces</button>
                <button className="btn string-btn" onClick={() => handleAction('clearStr')} data-action="clearStr">Clear</button>
            </div>
        </div>
    );
};

export default StringOperations;
