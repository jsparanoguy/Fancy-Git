import styled from 'styled-components'

export const Container = styled.div`
width: 90%;
margin-top: 30px;
transition:all 1s ease;
padding: 36px;
border-radius: 10px;
border-color: white;
box-shadow: 4px -2px #f7f7f7;
`

export const ContainerMedium = styled.div`
width: 90%;
margin-top: 30px;
transition:all 1s ease;
padding: 36px;
border-radius: 10px;
border-color: white;
box-shadow: 4px -2px #f7f7f7;
`

export const PostContainer = styled.ul`
margin-right: 70px;
}
`
export const PostLine = styled.li`
margin-bottom: 30px;
margin-right: 30px;
list-style: none;
padding: 20px;
border: 1px solid lightgray;
width: 100%
}
`


export const RepoContainer = styled.ul`
    display: inline-flex;
    list-style: none;
    width: 100%
}
`


export const RepoInfos = styled.li`
    border-right: 1px solid lightgray;
    padding-right: 50px;
    margin-right: 20px;
    max-width: 600px;
}
`

export const FavButton = styled.a`
border: 1px solid transparent;
border-radius: 25px;
background: rgb(63, 81, 181);
padding: 9px;
color: white;
float: right;
list-style: none;
position: relative;
cursor: pointer;
top: -8px;
`