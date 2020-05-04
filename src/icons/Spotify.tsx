import * as React from 'react'

function SvgSpotify(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 32 32" width="1em" height="1em" {...props}>
            <path d="M16 4C9.371 4 4 9.371 4 16s5.371 12 12 12 12-5.371 12-12S22.629 4 16 4zm0 2a9.96 9.96 0 0110 10 9.96 9.96 0 01-10 10A9.96 9.96 0 016 16 9.96 9.96 0 0116 6zm-1.594 4.75c-1.945 0-3.64.18-5.25.688-.426.085-.781.406-.781 1 0 .593.438 1.117 1.031 1.03.254 0 .426-.093.594-.093 1.355-.34 2.883-.5 4.406-.5 2.961 0 6 .66 8.031 1.844.254.086.34.187.594.187.594 0 1.008-.437 1.094-1.031 0-.508-.254-.832-.594-1-2.539-1.438-5.91-2.125-9.125-2.125zm-.281 3.719c-1.777 0-3.043.254-4.313.594-.421.167-.656.43-.656.937 0 .422.336.844.844.844.172 0 .246-.008.5-.094.93-.254 2.207-.406 3.563-.406 2.792 0 5.222.68 7 1.781.167.086.34.156.593.156.508 0 .844-.43.844-.937 0-.34-.16-.676-.5-.844-2.2-1.355-4.996-2.031-7.875-2.031zm.281 3.656c-1.437 0-2.8.16-4.156.5-.34.086-.594.328-.594.75 0 .34.266.688.688.688.086 0 .332-.094.5-.094a15.582 15.582 0 013.469-.407c2.113 0 4.046.508 5.656 1.438.172.086.363.156.531.156.34 0 .664-.254.75-.593 0-.426-.184-.583-.438-.75-1.863-1.102-4.039-1.688-6.406-1.688z" />
        </svg>
    )
}

export default SvgSpotify
