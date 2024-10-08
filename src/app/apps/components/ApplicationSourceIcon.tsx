


export default function ApplicationSourceIcon({sources}: any) {
    return (
        (sources as Array<string>).join(',')
    );
}