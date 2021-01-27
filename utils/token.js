const localstorgeKey = 'storage_token'

// 缓存token
export const setToken = function(token) {
	uni.setStorage({
	    key: localstorgeKey,
	    data: JSON.stringify(token),
	});
}

// 获取token
export const getToken = function() {
	let storage_token = uni.getStorageSync(localstorgeKey)
	return storage_token ? JSON.parse(storage_token) : ''
}

// 删除token
export const removeToken = function() {
	uni.removeStorageSync(localstorgeKey);
}
