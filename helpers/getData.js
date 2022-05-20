const GetData = async(url) => {
    let data = await axios.get(url)
    return data;
}

export default GetData;