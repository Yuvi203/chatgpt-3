import SchoolIcon from '@mui/icons-material/School';
import { BusinessCenter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Title from "../Components/Title"
import {InnerLayout} from "../styles/Layouts"
import ResumeItem from './ResumeItem'
import SmallTitle from './SmallTitle'

const Resume = () => {
  return (
    <Container>
        <Title title={'Resume'} span={'resume'}/>
        <InnerLayout>
            <div className='small-title'>
              <SmallTitle icon={<BusinessCenter/>} title={'Working Experience'}/>
            </div> 
            <div className='resume-content'>
            <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />

            </div>
            <div className='small-title u-small-title-margin'>
                <SmallTitle icon={<SchoolIcon/>} title={'Educational Qualifications'}/>
            </div>
            <div className="resume-content ">
                    <ResumeItem 
                        year={'2011 - 2022'} 
                        title={'Computer Science Degree'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'A - Levels'}
                        subTitle={'Church Hill High'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>
        </InnerLayout>
    </Container>
  )
}

export default Resume

const Container = styled.div`
.resume-content{
    border-left:2px solid var(--border-color);
}
.small-title{
    padding-bottom:3rem;
}
.u-small-title-margin{
    margin-top: 4rem;
}
`