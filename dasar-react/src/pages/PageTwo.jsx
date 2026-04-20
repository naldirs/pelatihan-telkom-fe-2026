import React from 'react';
import { Link } from 'react-router-dom';

function PageOne() {
    return (
        <div>
            <Link to="/page2">
                <button>
                    Pergi ke Halaman Dua
                </button>
            </Link>
        </div>
    );
}

export default PageOne;