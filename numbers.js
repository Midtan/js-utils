// format bytes into readable numbers
function formatBytes(bytes, decimals, bibytes = true) {
    if (bytes === 0) {
        return '0 Bytes';
    }
    const k = bibytes ? 1024 : 1000,
        dm = decimals || 2,
        sizes = bibytes ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
