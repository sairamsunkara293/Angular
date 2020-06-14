<div>
    
    <!--ticket kanban view card starts here-->
    <div class="card shadow-sm p-0">
        <div class="align-items-center justify-content-between">
        <!-- card header starts here -->
            <div class="card-header bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                    <h6 class="card-title ml-2 mb-0 pl-3 d-flex align-items-center">
                        <a :href="`#/ms/support/2/0/ticket_details/v/v-kanban/c=supportly-ticket_details-card,su=categories.type-status,sk=name,ik=ticket_status/v-table/b=t,d=t,so=t/:block3/:block_params3/:block4/:block_params4/c-v/sk=t,s=subject,ad=t,haf=t,f=t,af=f,nrs=f,nrf=f,i=f,mi=9,md=support-tickets-dropdown,fp=id,ik=id,rid=id,kv=status_id,onr=priority.edit.duplicate/vs/0/:s_entity/${item.id}/v-table-ref/v-slideout-lhs-block1:v-slideout-lhs-support-custom-block/se=created_date.updated_date.due_time/v-s-hd/first_name,subject/:body_name1/v-slideout-rhs-support/:body_block1_params/Respond/support-respond-tab/:body_block2_params/Note/support-note-tab/:body_block3_params/Forward/support-forward-tab/:body_block4_params/:body_name5/:body_block5/:body_block5_params`" class="mr-2 text-primary">#{{item.id}}</a>
                        <div v-if="item.subject.length>=15" class="text-truncate w-150 text-capitalize mr-1"
                            v-b-tooltip.hover :title="item.subject">{{item.subject}}</div>
                        <div v-else class="mr-1 text-capitalize">{{item.subject}}</div>
                        <span v-if="item.source==`email`" class="small text-muted"><i class="fal fa-envelope"></i>
                        </span>
                        <span v-if="item.source==`twitter`" class="small text-muted"><i
                                class="fab fa-twitter-square"></i>
                        </span>
                        <span v-if="item.source==`facebook`" class="small text-muted"><i
                                class="fab fa-facebook-square"></i>
                        </span>
                        <span v-if="item.source==`instagram`" class="small text-muted"><i
                                class="fab fa-instagram-square"></i>`
                        </span>
                    </h6>
                    <div class="supportly-alerts">
                        <span v-if="item.priority==`low`"
                            class="d-flex align-items-center justify-content-center alert alert-danger px-3 py-2 mb-0 text-capitalize">{{item.priority}}</span>
                        <span v-else-if="item.priority==`medium`"
                            class="d-flex align-items-center justify-content-center alert alert-primary px-3 py-2 mb-0 text-capitalize">{{item.priority}}</span>
                        <span v-else-if="item.priority==`high`"
                            class="d-flex align-items-center justify-content-center alert alert-danger px-3 py-2 mb-0 text-capitalize">{{item.priority}}</span>
                        <span v-else
                            class="d-flex align-items-center justify-content-center alert alert-primary px-3 py-2 mb-0 text-capitalize">{{item.priority}}</span>
                    </div>
                </div>

                <p class="card-text small mb-0 pl-5 text-dark">
                    <ac-gravatar class="d-inline-block mr-1 support-ticket-av"
                        :avatar_props="{ size: 18, rounded: true ,username:item.first_name}" />
                    <span class="text-muted">by</span> {{item.first_name}} -
                    <span class="text-muted">{{newdate}}</span>
                </p>
            </div>
             <!-- card header ends here -->
        </div>
  <!-- card body starts here -->
        <div class="card-body pb-3 px-3">
            <p class="small" v-if="item.description" >{{item.description}}</p>
            <p class="small" v-if="item.description==null">{{item.subject}}</p>
        </div>
  <!-- card body ends here -->
  <!-- card footer starts here -->
        <div class="card-footer border-top-0 bg-transparent text-muted px-3">
            <div class="d-flex justify-content-between">
                <a href="#" class="text-muted small"><i class="fal fa-comment-alt"></i><span
                        class="count ml-1 small">3</span></a>
            </div>
        </div>
        <!-- card footer ends here -->
    </div>
     <!--ticket kanban view card ends here-->
     
</div>