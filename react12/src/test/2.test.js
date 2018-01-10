class Notification extends Component {
    render () {
        return getNotificationsCount()>0?<span>有({getNotificationsCount()})条未读消息</span>:<span>没有未读消息</span>
    }
}
