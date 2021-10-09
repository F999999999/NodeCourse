"use strict";(self.webpackChunkNodeCourse=self.webpackChunkNodeCourse||[]).push([[397],{3358:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-592177d8",path:"/guide/05-%E8%B7%A8%E5%9F%9F%E4%B8%AD%E9%97%B4%E4%BB%B6.html",title:"5.cors跨域",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"guide/05-跨域中间件.md",git:{updatedTime:1633735293e3,contributors:[{name:"YeungWanLum",email:"295386487@qq.com",commits:1}]}}},204:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(6252).uE)('<h1 id="_5-cors跨域" tabindex="-1"><a class="header-anchor" href="#_5-cors跨域" aria-hidden="true">#</a> 5.cors跨域</h1><ol><li>下载</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> koa2-cors --save\n</code></pre></div><ol start="2"><li>使用</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa2-cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//或者</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n    <span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token function-variable function">origin</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//设置允许来自指定域名请求</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>url <span class="token operator">===</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 允许来自所有域名请求</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> <span class="token string">&#39;http://localhost:8080&#39;</span><span class="token punctuation">;</span> <span class="token comment">//只允许http://localhost:8080这个域名的请求</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        maxAge<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">//指定本次预检请求的有效期，单位为秒。</span>\n        credentials<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否允许发送Cookie</span>\n        allowMethods<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//设置所允许的HTTP请求方法</span>\n        allowHeaders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Accept&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//设置服务器支持的所有头信息字段</span>\n        exposeHeaders<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;WWW-Authenticate&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Server-Authorization&#39;</span><span class="token punctuation">]</span> <span class="token comment">//设置获取其他自定义字段</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="3"><li>自己实现cors中间件</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT, POST, GET, DELETE, OPTIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',7),t={},o=(0,a(3744).Z)(t,[["render",function(n,s){return p}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,p]of s)n[a]=p;return n}}}]);