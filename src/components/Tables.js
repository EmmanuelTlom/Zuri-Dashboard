
import {
  Badge,
  Card,
  CardHeader,
  Table,
  Row,
} from "reactstrap";
// core components
const Tables = () => {
  return (
    <>
    
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <div className="flex">
                  <CardHeader className="border-0">
                    <h3 className="mb-0">Recent Posts</h3>
                    <small>Don’t miss important announcements</small>
                  </CardHeader>

                  <p>See All Posts<i class="fa-solid fa-arrow-right"></i></p>
              </div>
              
              <Table className="align-items-center table-flush" responsive>
                <tbody>
                  
                  <tr>
                    <th scope="">
                          <div className="mb-0 text-black text-sm">
                            Stage 2 has ended
                          </div>
                         <small>Jan 17, 2022</small>
                    </th>
                    <td>
                        <div className="mb-0 black text-black text-sm">
                            HNG 9
                        </div>
                        <small>Author</small></td>
                    <td className="right">
                      <Badge color="" className="badge-dot table_badge table_badge_green mr-1">
                        <i className="bg-warning" />
                        Uncategorized
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th scope="">
                          <div className="mb-0 text-black text-sm">
                            We’re close to finishing i9
                          </div>
                         <small>Jan 17, 2022</small>
                    </th>
                    <td>
                        <div className="mb-0 black text-black text-sm">
                            HNG 9
                        </div>
                        <small>Author</small></td>
                    <td className="right">
                      <Badge color="" className="badge-dot table_badge table_badge_yellow mr-1">
                        <i className="bg-warning" />
                        Graders
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <th scope="">
                          <div className="mb-0 text-black text-sm">
                            Say hello to our finalists
                          </div>
                         <small>Jan 17, 2022</small>
                    </th>
                    <td>
                        <div className="mb-0 black text-black text-sm">
                            HNG 9
                        </div>
                        <small>Author</small></td>
                    <td className="right">
                      <Badge color="" className="badge-dot table_badge table_badge_pink mr-1">
                        <i className="bg-warning" />
                        Tutors
                      </Badge>
                    </td>
                  </tr>
                 <tr>
                    <th scope="">
                        <div className="mb-0 text-black text-sm">
                            Say hello to our finalists
                        </div>
                        <small>Jan 17, 2022</small>
                    </th>
                    <td>
                        <div className="mb-0 black text-black text-sm">
                            HNG 9
                        </div>
                        <small>Author</small></td>
                    <td className="right">
                      <Badge color="" className="badge-dot table_badge table_badge_purple mr-1">
                        <i className="bg-warning" />
                        Mentors
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        
    </>
  );
};

export default Tables;
