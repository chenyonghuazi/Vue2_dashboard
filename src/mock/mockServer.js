import Mock from 'mockjs';
import homeApi from '@/mock/MockHomeData';
import userApi from '@/mock/MockUserData';
import permissionApi from '@/mock/MockServerData/permission'

Mock.mock('/api/home/getData',homeApi.getStatisticalData())
Mock.mock(/api\/user\/add/,'post',userApi.createUser)
Mock.mock(/api\/user\/edit/,'post',userApi.updateUser)
Mock.mock(/api\/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/api\/user\/del/,'get',userApi.deleteUser)

//获取权限
Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)
