import React, { Component } from 'react'
const emoji = require('node-emoji')
import { Container } from '../../styles/clicked_repo'
import { PopularDiv, PopularStars, PopularP, PopularElem, PopularContainer, ImgProfil, Img, PopularButton, PopularName } from '../../styles/popular_styles'


export const SingleRepo = ({ repo }) => console.log(repo) || (
    <Container>
        <div style={{ width: '100%' }}>

            <span style={{ float: 'right' }} data-tip="Stars"><span style={{ color: '#3f51b5' }}>{repo.stargazers.totalCount}</span> {emoji.emojify(':star:')}</span>

        </div>
        <h4 style={{ textAlign: 'center', marginLeft: '20%' }}>Additional info :</h4>
        <ul id='allContent' style={{ display: 'inline-flex', listStyle: 'none', width: '100%' }}>
            <li style={{ borderRight: '1px solid lightgray', paddingRight: '50px', marginRight: '20px' }}>

                <div>
                    <div style={{ position: 'relative', top: '-50px' }}>
                        <span><strong>Project : {repo.name}</strong></span>
                        <br />
                        <span><strong>By @{repo.owner.login}</strong></span>
                    </div>
                    <Img src={repo.owner.avatarUrl} />
                </div>
                <div>
                    <p>{repo.description}</p>
                </div>
                <div>
                    <p>Created at : {repo.createdAt}</p>
                </div>
                <div>
                    <h3>Primary language : {repo.primaryLanguage.name}</h3>
                </div>

            </li>

            <li>

                <h3>Issues Number : {Object.keys(repo.issues.nodes).length}</h3>

                <p>Licence : {repo.licenseInfo === null ? 'none' : repo.licenseInfo.name}</p>

            </li>


        </ul>

        </Container>
)

export const RepoPosts = ({ medium }) =>  console.log(medium) || (

    <Container>
    <div style={{overflowY: 'scroll', height: '500px'}}>
    <h3> Posts </h3>
        
            <ul>
                
                {                  
                    medium.map((elem, i) => (
                    <li style={{ marginBottom: '30px', marginRight: '30px', listStyle: 'none', padding: '20px',border: '1px solid lightgray', background: 'burlywood', borderRadius: '25px'}} key={i}> 
                    
                    <h3 style={{borderBottom: '2px solid lightgrey'}}> {elem.title} </h3>
                    <a style={{textDecoration: 'none'}} target='__blank' href={elem.url} >{elem.content.subtitle}</a>
                    
                    
                     </li>
                ))}

            </ul>

    </div>

</Container>
  )
