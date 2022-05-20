const uploadData = async (url, object = {}) => {

    await  axios.post(url, object)
}

export default PostData;