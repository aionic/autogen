"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9163],{9148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(5893),r=t(1151),o=t(4866),l=t(5162);const i={},s="Installation",c={id:"installation/Installation",title:"Installation",description:"Create a virtual environment (optional)",source:"@site/docs/installation/Installation.mdx",sourceDirName:"installation",slug:"/installation/",permalink:"/autogen/docs/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/installation/Installation.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/autogen/docs/Getting-Started"},next:{title:"Docker",permalink:"/autogen/docs/installation/Docker"}},u={},d=[{value:"Create a virtual environment (optional)",id:"create-a-virtual-environment-optional",level:2},{value:"Install AutoGen",id:"install-autogen",level:2},{value:"Code execution with Docker (default)",id:"code-execution-with-docker-default",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h2,{id:"create-a-virtual-environment-optional",children:"Create a virtual environment (optional)"}),"\n",(0,a.jsx)(n.p,{children:"When installing AutoGen locally, we recommend using a virtual environment for the installation. This will ensure that the dependencies for AutoGen are isolated from the rest of your system."}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(l.Z,{value:"venv",label:"venv",default:!0,children:[(0,a.jsx)(n.p,{children:"Create and activate:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 -m venv pyautogen\nsource pyautogen/bin/activate\n"})}),(0,a.jsx)(n.p,{children:"To deactivate later, run:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"deactivate\n"})})]}),(0,a.jsxs)(l.Z,{value:"conda",label:"Conda",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html",children:"Install Conda"})," if you have not already."]}),(0,a.jsx)(n.p,{children:"Create and activate:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"conda create -n pyautogen python=3.10\nconda activate pyautogen\n"})}),(0,a.jsx)(n.p,{children:"To deactivate later, run:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"conda deactivate\n"})})]}),(0,a.jsxs)(l.Z,{value:"poetry",label:"Poetry",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://python-poetry.org/docs/#installation",children:"Install Poetry"})," if you have not already."]}),(0,a.jsx)(n.p,{children:"Create and activate:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"poetry init\npoetry shell\n\npoetry add pyautogen\n"})}),(0,a.jsx)(n.p,{children:"To deactivate later, run:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"exit\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"install-autogen",children:"Install AutoGen"}),"\n",(0,a.jsxs)(n.p,{children:["AutoGen requires ",(0,a.jsx)(n.strong,{children:"Python version >= 3.8, < 3.13"}),". It can be installed from pip:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pip install pyautogen\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"pyautogen<0.2"})," required ",(0,a.jsx)(n.code,{children:"openai<1"}),". Starting from pyautogen v0.2, ",(0,a.jsx)(n.code,{children:"openai>=1"})," is required."]})}),"\n",(0,a.jsx)(n.h2,{id:"code-execution-with-docker-default",children:"Code execution with Docker (default)"}),"\n",(0,a.jsxs)(n.p,{children:["Even if you install AutoGen locally, we highly recommend using Docker for ",(0,a.jsx)(n.a,{href:"/autogen/docs/FAQ#code-execution",children:"code execution"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The default behaviour for code-execution agents is for code execution to be performed in a docker container."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"To turn this off"}),": if you want to run the code locally (not recommended) then ",(0,a.jsx)(n.code,{children:"use_docker"})," can be set to ",(0,a.jsx)(n.code,{children:"False"})," in ",(0,a.jsx)(n.code,{children:"code_execution_config"})," for each code-execution agent, or set ",(0,a.jsx)(n.code,{children:"AUTOGEN_USE_DOCKER"})," to ",(0,a.jsx)(n.code,{children:"False"})," as an environment variable."]}),"\n",(0,a.jsxs)(n.p,{children:["You might want to override the default docker image used for code execution. To do that set ",(0,a.jsx)(n.code,{children:"use_docker"})," key of ",(0,a.jsx)(n.code,{children:"code_execution_config"})," property to the name of the image. E.g.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    human_input_mode="TERMINATE",\n    max_consecutive_auto_reply=10,\n    code_execution_config={"work_dir":"_output", "use_docker":"python:3"},\n    llm_config=llm_config,\n    system_message=""""Reply TERMINATE if the task has been solved at full satisfaction.\nOtherwise, reply CONTINUE, or the reason why the task is not solved yet."""\n)\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Turn off code execution entirely"}),": if you want to turn off code execution entirely, set ",(0,a.jsx)(n.code,{children:"code_execution_config"})," to ",(0,a.jsx)(n.code,{children:"False"}),". E.g.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    llm_config=llm_config,\n    code_execution_config=False,\n)\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var a=t(6905);const r={tabItem:"tabItem_Ymn6"};var o=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7294),r=t(6905),o=t(2466),l=t(6550),i=t(469),s=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(7294);const r={},o=a.createContext(r);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);