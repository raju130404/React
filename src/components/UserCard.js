import {Card,CardBody} from 'reactstrap';

function UserCard({user}) {
    return (
        <Card className = 'text-center mt-3 mb-4'>
            <img src = {user.avatar_url} className = 'img-thumbnail'/>
            <CardBody>
                <div className='text-primary'>{user.name}</div>
                <div className='text-primary'>{user.location}</div>
                <div className='text-primary'>{user.bio}</div>
                <div className='text-info'>Available for hire ? {user.hireable?"YES":"NO"}</div>
                <div className='text-primary'>Followers : {user.followers}</div>
            </CardBody>
        </Card>
    );
}

export default UserCard;